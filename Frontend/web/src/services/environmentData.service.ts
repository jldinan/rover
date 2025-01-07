const API_BASE_URL = '/api/environmental-data';

export interface EnvironmentalData {
  id: number;
  timestamp: Date;
  temperature: number;
  humidity: number;
}

export const getLatestEnvironmentalData = async (): Promise<EnvironmentalData> => {
  const response = await fetch(`${API_BASE_URL}/latest`);
  if (!response.ok) {
    throw new Error(`Error fetching environmentalData: ${response.statusText}`);
  }
  return response.json() as Promise<EnvironmentalData>;
};