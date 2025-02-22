// Interface for context.params and context in Next.js API routes
export interface ParamsType {
   params: {
      id: string;
      [key: string]: string;
   };
}

/**
 * Function to extract params and ensure `id` is a number
 * @param {ParamsType} context The context object from a Next.js API route
 * @returns The context object with `id` as a number
 */
export function getParams(context: ParamsType) {
   const { id, ...rest } = context.params;
   return {
      id: Number(id),
      ...rest,
   };
}
