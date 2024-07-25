
import * as express from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                username: string;
                email: string;
                name: string;
                address: string;
            };
        }
    }
}
