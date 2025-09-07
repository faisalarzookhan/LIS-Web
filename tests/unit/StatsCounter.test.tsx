import React from 'react';
import { render, screen, act } from '@testing-library/react';
import StatsCounter from '@/components/stats/StatsCounter';
import '@testing-library/jest-dom';

// We use fake timers to control the setTimeout in the component's useEffect
jest.useFakeTimers();

describe('StatsCounter Component', () => {
  it('should render the label and initial count of 0', () => {
    render(<StatsCounter label="Test Projects" value={150} />);
    expect(screen.getByText('Test Projects')).toBeInTheDocument();
    expect(screen.getByText('0+')).toBeInTheDocument();
  });

  it('should animate up to the target value for a standard number', () => {
    render(<StatsCounter label="Test Projects" value={120} />);
    act(() => {
      jest.runAllTimers();
    });
    // The final value should be formatted with toLocaleString() and a '+'
    expect(screen.getByText('120+')).toBeInTheDocument();
  });

  it('should handle large numbers with locale string formatting', () => {
    render(<StatsCounter label="Active Users" value={28000} />);
    act(() => {
      jest.runAllTimers();
    });
    // 28000 should be formatted as "28,000"
    expect(screen.getByText('28,000+')).toBeInTheDocument();
  });

  it('should display a percentage for "Client Retention"', () => {
    render(<StatsCounter label="Client Retention" value={98} />);
    act(() => {
      jest.runAllTimers();
    });
    // This specific label should result in a '%' sign
    expect(screen.getByText('98%')).toBeInTheDocument();
  });

  it('should not display a number higher than the target value', () => {
    render(<StatsCounter label="Test Projects" value={50} />);
    act(() => {
        jest.runAllTimers();
    });
    // It should display 50+, not 51+ or anything higher
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.queryByText('51+')).not.toBeInTheDocument();
  });
});
