"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    changeType: "positive" as const,
    icon: Users,
    description: "from last month",
  },
  {
    title: "Sales",
    value: "12,234",
    change: "+19%",
    changeType: "positive" as const,
    icon: ShoppingCart,
    description: "from last month",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: Activity,
    description: "from last month",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {stat.changeType === "positive" ? (
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              )}
              <span
                className={
                  stat.changeType === "positive"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {stat.change}
              </span>
              <span className="ml-1">{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
