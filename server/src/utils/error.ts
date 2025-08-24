export class ApiError extends Error {
    public statusCode: number;
    public description?: string;

    constructor(statusCode: number, message: string, description: string){
        super(message);
        this.statusCode = statusCode || 500;
        this.description = description || "Internal Server Error";
    }
}