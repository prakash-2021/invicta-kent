import instance from "@/app/lib/axios";

export interface PropertyImage {
  id: number;
  documentId: string;
  url: string;
  width: number;
  height: number;
  alternativeText: string | null;
}

export interface FloorPlan {
  id: number;
  documentId: string;
  url: string;
  width: number;
  height: number;
  alternativeText: string | null;
}

export interface Property {
  id: number;
  documentId: string;
  title: string;
  location: string;
  google_map_location: string;
  description: string;
  monthly_price: string;
  deposit_price: string;
  available: boolean;
  floors: number | null;
  size: number | null;
  property_type: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  heating: string | null;
  parking_spots: number | null;
  property_images: PropertyImage[];
  floor_plan: FloorPlan | null; // some properties may not have it
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface PropertyResponse {
  data: Property[];
  meta: {
    pagination: Pagination;
  };
}

export interface PropertyDetailResponse {
  data: Property;
}

export const getProperties = async () => {
  try {
    const { data } = await instance.get<PropertyResponse>(`/properties`);
    return data as PropertyResponse;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return { data: [], meta: { pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 } } } as PropertyResponse;
  }
};

export const getPropertiesDetail = async (id: string) => {
  try {
    const { data } = await instance.get<PropertyDetailResponse>(
      `/properties/${id}`
    );
    return data as PropertyDetailResponse;
  } catch (error) {
    console.error(`Failed to fetch property detail for ${id}:`, error);
    return { data: {} as Property } as PropertyDetailResponse;
  }
};
