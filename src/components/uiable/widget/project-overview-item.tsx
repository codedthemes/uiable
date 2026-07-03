"use client";

import { useEffect, useRef } from "react";

// third party
import ApexCharts from "apexcharts";

interface ProjectOverviewItemProps {
  title: string;
  value: string;
  series: number[];
  color: string;
}

//  ------------------------------ | BLOCK - PROJECT OVERVIEW ITEM | ------------------------------  //

export default function ProjectOverviewItem({
  title,
  value,
  series,
  color,
}: ProjectOverviewItemProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let chart: ApexCharts | null = null;

    const timer = setTimeout(() => {
      if (!active || !chartRef.current) return;

      const options = {
        chart: {
          type: "area",
          height: 40,
          stacked: true,
          sparkline: { enabled: true },
        },
        colors: [color],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            type: "vertical",
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            colorStops: [
              {
                offset: 0,
                color: [color],
                opacity: 0.3,
              },
              {
                offset: 100,
                color: [color],
                opacity: 0,
              },
            ],
          },
        },
        stroke: { curve: "smooth", width: 2 },
        series: [{ data: series }],
      };

      chart = new ApexCharts(chartRef.current, options as any);
      chart.render();
    }, 0);

    return () => {
      active = false;
      clearTimeout(timer);
      if (chart) {
        chart.destroy();
      }
    };
  }, [series, color]);

  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4">
      <div className="grid grid-cols-12 gap-4 self-center">
        <div className="col-span-6 self-center">
          <p className="text-foreground mb-1">{title}</p>
          <h5 className="mb-0">{value}</h5>
        </div>
        <div className="col-span-6 self-center">
          <div ref={chartRef} className="grow h-10"></div>
        </div>
      </div>
    </div>
  );
}
