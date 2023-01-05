import axios from "axios";

type TExampleBody = {
    field: string;
    numField: number;
};

type TExampleResponse = {
    field_unsanitized: string;
    num_field: number;
};

type TExampleSanitized = {
    field: string;
    numField: number;
};

/**
 * Sanitize a Example response object to a better format used all over your components.
 * @param response The response UNsanitized
 * @returns A sanitized object
 */
const sanitizeExampleResponse = (response: TExampleResponse): TExampleSanitized => {
    return {
        field: response.field_unsanitized,
        numField: response.num_field,
    };
};

/**
 * TODO: Comment your post request.
 *
 * @param body The body to be posted
 * @returns A sanitized response
 */
export const postExample = async (body: TExampleBody): Promise<TExampleSanitized | null> => {
    const response = await axios.post<TExampleResponse>(`/example`, body);

    if (response.data) {
        return sanitizeExampleResponse(response.data);
    }

    return null;
};

/**
 * TODO: Comment your GET all request.
 *
 * @returns An sanitized list with Example
 */
export const getExamples = async (): Promise<TExampleSanitized[] | []> => {
    const response = await axios.get<TExampleResponse>(`/example`);

    if (response.data) {
        return [sanitizeExampleResponse(response.data)];
    }

    return [];
};

/**
 * TODO: Comment your GET all request.
 *
 * @param exampleId The id of the object
 * @returns An sanitized list with Example
 */
export const getExampleById = async (exampleId: string): Promise<TExampleSanitized | null> => {
    const response = await axios.get<TExampleResponse>(`/example/${exampleId}`);

    if (response.data) {
        return sanitizeExampleResponse(response.data);
    }

    return null;
};

/**
 * TODO: Comment your patch request.
 *
 * @param body The body to be patched
 * @returns A sanitized response
 */
export const patchExample = async (id = "", body: TExampleBody): Promise<TExampleSanitized | null> => {
    const response = await axios.patch<TExampleResponse>(`/example/${id}`, body);

    if (response.data) {
        return sanitizeExampleResponse(response.data);
    }

    return null;
};

/**
 * TODO: Comment 
 * @param ids 
 */
export const deleteExample = async (ids: string[]): Promise<void> => {
    const promises = ids.map(async (id) => {
        return await axios.delete(`/example/${id}`);
    });

    await Promise.all(promises);
}

export const putExample = (body: TExampleBody) => {

}