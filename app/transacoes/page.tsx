"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle } from "lucide-react";

const initialTransactions = [
  {
    id: 1,
    data: "2023-06-01",
    descricao: "Salário",
    valor: 5000,
    tipo: "entrada",
  },
  {
    id: 2,
    data: "2023-06-02",
    descricao: "Aluguel",
    valor: -1500,
    tipo: "saida",
  },
  {
    id: 3,
    data: "2023-06-03",
    descricao: "Supermercado",
    valor: -300,
    tipo: "saida",
  },
  {
    id: 4,
    data: "2023-06-04",
    descricao: "Freelance",
    valor: 1000,
    tipo: "entrada",
  },
  {
    id: 5,
    data: "2023-06-05",
    descricao: "Conta de luz",
    valor: -150,
    tipo: "saida",
  },
];

export default function Transacoes() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({
    data: "",
    descricao: "",
    valor: "",
    tipo: "entrada",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setNewTransaction((prev) => ({ ...prev, tipo: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valor =
      newTransaction.tipo === "entrada"
        ? Math.abs(Number(newTransaction.valor))
        : -Math.abs(Number(newTransaction.valor));

    const transaction = {
      id: transactions.length + 1,
      ...newTransaction,
      valor,
    };
    setTransactions((prev) => [transaction, ...prev]);
    setNewTransaction({ data: "", descricao: "", valor: "", tipo: "entrada" });
  };

  return (
    <div className="space-y-6 pt-16 md:pt-0">
      <h1 className="text-3xl font-bold">Transações</h1>

      <Card>
        <CardHeader>
          <CardTitle>Adicionar Nova Transação</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="data">Data</Label>
                <Input
                  id="data"
                  name="data"
                  type="date"
                  value={newTransaction.data}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Input
                  id="descricao"
                  name="descricao"
                  value={newTransaction.descricao}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valor">Valor</Label>
                <Input
                  id="valor"
                  name="valor"
                  type="number"
                  value={newTransaction.valor}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo</Label>
                <Select
                  value={newTransaction.tipo}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entrada">Entrada</SelectItem>
                    <SelectItem value="saida">Saída</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Transação
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transações Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.data}</TableCell>
                  <TableCell>{transaction.descricao}</TableCell>
                  <TableCell
                    className={
                      transaction.valor >= 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {transaction.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </TableCell>
                  <TableCell>
                    {transaction.tipo === "entrada" ? "Entrada" : "Saída"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
