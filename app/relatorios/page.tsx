"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", receitas: 4000, despesas: 2400, economia: 1600 },
  { name: "Fev", receitas: 3000, despesas: 1398, economia: 1602 },
  { name: "Mar", receitas: 2000, despesas: 9800, economia: -7800 },
  { name: "Abr", receitas: 2780, despesas: 3908, economia: -1128 },
  { name: "Mai", receitas: 1890, despesas: 4800, economia: -2910 },
  { name: "Jun", receitas: 2390, despesas: 3800, economia: -1410 },
  { name: "Jul", receitas: 3490, despesas: 4300, economia: -810 },
];

export default function Relatorios() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState("7d");

  return (
    <div className="space-y-6 pt-16 md:pt-0">
      <h1 className="text-3xl font-bold">Relatórios Financeiros</h1>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Visão Geral Financeira</CardTitle>
            <Select
              value={periodoSelecionado}
              onValueChange={setPeriodoSelecionado}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Últimos 7 dias</SelectItem>
                <SelectItem value="30d">Últimos 30 dias</SelectItem>
                <SelectItem value="90d">Últimos 90 dias</SelectItem>
                <SelectItem value="12m">Últimos 12 meses</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="receitas"
                stroke="#4ade80"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="despesas" stroke="#f87171" />
              <Line type="monotone" dataKey="economia" stroke="#60a5fa" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Receitas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 19.550,00</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao período anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Despesas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 26.406,00</div>
            <p className="text-xs text-muted-foreground">
              +5% em relação ao período anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Economia Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">-R$ 6.856,00</div>
            <p className="text-xs text-muted-foreground">
              -20% em relação ao período anterior
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
