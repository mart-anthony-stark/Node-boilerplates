import { catcher } from ".";
import { NextFunction, Request, Response } from "express";

export function Handler(cb?: Function) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (request: Request, response: Response) {
      Promise.resolve(originalMethod.call(this, request, response)).catch(
        (err) => {
          if (cb) {
            cb(request, response);
            return;
          }
          if (err.name === "MongoServerError" && err.code === 11000) {
            err.message =
              "Email address already in use. Please enter a different email.";
          }
          response.status(400).send({ message: err.message });
        }
      );
    };

    return descriptor;
  };
}

export function Service<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    // Add an index signature to the class constructor
    [key: string]: any;

    // Iterate through all methods of the class
    // and apply the `catcher` decorator
    constructor(...args: any[]) {
      super(...args);
      const prototype = Object.getPrototypeOf(this);
      const methodNames = Object.getOwnPropertyNames(prototype) as Array<
        keyof typeof prototype
      >;

      methodNames.forEach((methodName) => {
        const method = this.methodName; // Type assertion here
        // if (methodName !== "constructor" && typeof method === "function") {
        this.methodName = catcher(method);
        // }
      });
    }
  };
}

export interface GuardResponse {
  status?: number;
  message?: string;
}

export function UseGuard(
  method: (req: Request, res: Response, next: NextFunction) => any
) {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      const result: GuardResponse | boolean = await method(req, res, next);
      if (typeof result === "boolean") {
        if (result) {
          return originalMethod.apply(this, arguments);
        } else {
          return res.status(403).json({ message: "Unauthorized request." });
        }
      } else if (typeof result === "object" && result.status) {
        return res.status(result.status).json({ ...result, status: undefined });
      } else {
        console.log(result);
        return res
          .status(500)
          .json({ message: "Invalid response from the guard." });
      }
    };

    return descriptor;
  };
}
