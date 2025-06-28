"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", revenue: 186, profit: 80 },
  { month: "February", revenue: 305, profit: 200 },
  { month: "March", revenue: 237, profit: 120 },
  { month: "April", revenue: 273, profit: 190 },
  { month: "May", revenue: 209, profit: 130 },
  { month: "June", revenue: 214, profit: 140 },
  { month: "July", revenue: 290, profit: 210 },
  { month: "August", revenue: 320, profit: 240 },
  { month: "September", revenue: 280, profit: 200 },
  { month: "October", revenue: 340, profit: 260 },
  { month: "November", revenue: 380, profit: 290 },
  { month: "December", revenue: 420, profit: 320 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>
          Showing total revenue and profit for the last 12 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                typeof value === "string"
                  ? value.slice(0, 3)
                  : String(value).slice(0, 3)
              }
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="profit"
              type="natural"
              fill="var(--color-profit)"
              fillOpacity={0.4}
              stroke="var(--color-profit)"
              stackId="a"
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="var(--color-revenue)"
              fillOpacity={0.4}
              stroke="var(--color-revenue)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - December 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
