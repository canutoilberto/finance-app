"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", entrada: 4000, saida: 2400 },
  { name: "Fev", entrada: 3000, saida: 1398 },
  { name: "Mar", entrada: 2000, saida: 9800 },
  { name: "Abr", entrada: 2780, saida: 3908 },
  { name: "Mai", entrada: 1890, saida: 4800 },
  { name: "Jun", entrada: 2390, saida: 3800 },
];

export default function Dashboard() {
  const [userName] = useState("João");

  return (
    <div className="space-y-6 pt-16 md:pt-0">
      <h1 className="text-3xl font-bold">Olá, {userName}!</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Entradas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-[#4ade80] font-bold">
              R$ 15.231,89
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saídas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-[#f87171] font-bold">R$ 7.349,00</div>
            <p className="text-xs text-muted-foreground">
              +4.5% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 7.882,89</div>
            <p className="text-xs text-muted-foreground">
              +15.6% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Visão Geral Financeira</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="entrada" fill="#4ade80" name="Entradas" />
              <Bar dataKey="saida" fill="#f87171" name="Saídas" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
