'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
  [key: string]: any;
}

interface DonutChartProps {
  data: DataItem[];
  height?: number;
  centerValue?: string;
  centerLabel?: string;
}

const defaultData: DataItem[] = [
  { name: 'Prize Pool', value: 80, color: '#f59e0b' },
  { name: 'Treasury', value: 15, color: '#d97706' },
  { name: 'Operations', value: 5, color: '#b45309' },
];

export default function DonutChart({
  data = defaultData,
  height = 250,
  centerValue = '80%',
  centerLabel = 'Prize Pool'
}: DonutChartProps) {
  return (
    <div className="relative w-full">
      <div className="relative" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: 'rgba(17, 17, 17, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
              labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
              formatter={(value: number) => [`${value}%`, '']}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-3xl font-bold text-white mb-1">{centerValue}</p>
            <p className="text-sm text-[var(--text-muted)]">{centerLabel}</p>
          </div>
        </div>
      </div>

      {/* Legend - Fixed Position */}
      <div className="flex flex-col gap-2 mt-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-[var(--text-secondary)]">{item.name}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-sm font-semibold text-[var(--text-primary)]">{item.amount || `${item.value}%`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
