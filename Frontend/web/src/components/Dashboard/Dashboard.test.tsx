import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';
import { getLatestEnvironmentalData } from '../../services/environmentData.service';

// Mock the environmental data service using vi.mock
vi.mock('../../services/environmentData.service', () => ({
  getLatestEnvironmentalData: vi.fn(),
}));

const mockEnvironmentalData = {
  temperature: 25,
  humidity: 60,
  pressure: 1013,
};

const mockEnvironmentalDataWithNullValue = {
  temperature: null,
  humidity: 60,
  pressure: 1013,
};

const mockEnvironmentalDataInvalidType = {
  temperature: 'hot' as unknown as number,
  humidity: 60,
  pressure: 1013,
}

describe('Dashboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading message on init', () => {
    (getLatestEnvironmentalData as Mock).mockResolvedValue(mockEnvironmentalData);
    render(<Dashboard />);
    expect(screen.getByText(/Connecting to server/i)).toBeInTheDocument();
  });

  it('calls getLatestEnvironmentalData once on mount', async () => {
    (getLatestEnvironmentalData as Mock).mockResolvedValue(mockEnvironmentalData);
    render(<Dashboard />);
    await waitFor(() => {
      expect(getLatestEnvironmentalData).toHaveBeenCalledTimes(1);
    });
  });
  
  it('displays environmental data when loaded', async () => {
    (getLatestEnvironmentalData as Mock).mockResolvedValue(mockEnvironmentalData);
    render(<Dashboard />);
    await waitFor(() => {
      expect(screen.getByLabelText(/temperature: 25/i)).toBeInTheDocument();
    });
  });

  it('displays error message on getLatestEnvironmentalData fetch failure', async () => {
    (getLatestEnvironmentalData as Mock).mockRejectedValue(new Error('Fetch failed'));
    render(<Dashboard />);
    await waitFor(() => {
      expect(screen.getByText(/Failed to fetch environmental data/i)).toBeInTheDocument();
    });
  }); 

  it('renders fallback for null temperature', async () => {
    (getLatestEnvironmentalData as Mock).mockResolvedValue(mockEnvironmentalDataWithNullValue);
    render(<Dashboard />);
    await waitFor(() => {
      expect(getLatestEnvironmentalData).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(screen.getByLabelText(/temperature: no data/i)).toBeInTheDocument();
    });
    expect(screen.queryByLabelText(/temperature: null/i)).not.toBeInTheDocument();
  });

  it('renders fallback for invalid data type temperature', async () => {
    (getLatestEnvironmentalData as Mock).mockResolvedValue(mockEnvironmentalDataInvalidType);
    render(<Dashboard />);
    await waitFor(() => {
      expect(getLatestEnvironmentalData).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(screen.getByLabelText(/temperature: no data/i)).toBeInTheDocument();
    });
    expect(screen.queryByLabelText(/temperature: hot/i)).not.toBeInTheDocument();
  });
});
