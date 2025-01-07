import { EnvironmentalData } from "../models/environmentalData";

const API_BASE_URL = '/api/environmental-data';

export const getLatestEnvironmentalData = async (): Promise<EnvironmentalData> => {
  const response = await fetch(`${API_BASE_URL}/latest`);
  if (!response.ok) {
    throw new Error(`Error fetching environmentalData: ${response.statusText}`);
  }
  return response.json() as Promise<EnvironmentalData>;
};