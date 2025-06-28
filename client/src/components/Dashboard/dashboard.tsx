"use client";

import { RecentActivity } from "../Activity/recent-activity";
import { RevenueChart } from "../Charts/revenue-chart";
import { SalesChart } from "../Charts/sales-chart";
import { StatsCards } from "../Charts/stats-cards";
import { UserAnalytics } from "../Charts/user-analytics";

export default function Dashboard() {
  return (
    <section className="flex flex-col w-full h-auto">
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground">
                Here&apos;s what&apos;s happening with your business today.
              </p>
            </div>

            <StatsCards />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <RevenueChart />
              </div>
              <div className="col-span-3">
                <RecentActivity />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <SalesChart />
              </div>
              <div className="col-span-3">
                <UserAnalytics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
