

export interface SendEmail {
    data: Data;
}

export interface Data {
    name:     string;
    email:    string;
    phone:    number;
    services: string;
    comments: string;
}

export interface SendEmailResponse {
    data: DataResponse;
}

export interface DataResponse {
    attributes: Data;
}
