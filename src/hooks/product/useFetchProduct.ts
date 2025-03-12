import {client} from "@/api/private-client.ts";
import {Product} from "@/types/product.types.ts";
import {AxiosResponse} from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchProducts = async (page: number, limit: number, name?: string, categoryId?: string, minPrice?: number, maxPrice?: number): Promise<AxiosResponse<Product[]>> => {
    const params = new URLSearchParams();


    params.append('page', page.toString());
    params.append('limit', limit.toString());

    if (name) params.append('name', name);
    if (categoryId) params.append('categoryId', categoryId);
    if (minPrice !== undefined) params.append('minPrice', minPrice.toString());
    if (maxPrice !== undefined) params.append('maxPrice', maxPrice.toString());

    return await client.get<Product[]>(`product?${params.toString()}`);
}
export const useFetchProduct = (page: number, limit: number, name?: string, categoryId?: string, minPrice?: number, maxPrice?: number) => {
    return useQuery(
        {
            queryKey: ['products', page, limit, name, categoryId, minPrice, maxPrice],
            queryFn: () => fetchProducts(page, limit, name, categoryId, minPrice, maxPrice),
            staleTime: 1000 * 60 * 5,
        }
    );
}