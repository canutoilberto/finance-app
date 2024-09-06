"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Configuracoes() {
  const [nomeUsuario, setNomeUsuario] = useState("João Silva");
  const [email, setEmail] = useState("joao.silva@exemplo.com");
  const [moeda, setMoeda] = useState("BRL");
  const [notificacoesEmail, setNotificacoesEmail] = useState(true);
  const [notificacoesPush, setNotificacoesPush] = useState(false);
  const [temaEscuro, setTemaEscuro] = useState(false);

  const handleSalvarPerfil = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar as alterações do perfil
    console.log("Perfil salvo:", { nomeUsuario, email });
  };

  const handleSalvarPreferencias = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar as preferências
    console.log("Preferências salvas:", {
      moeda,
      notificacoesEmail,
      notificacoesPush,
      temaEscuro,
    });
  };

  return (
    <div className="space-y-6 pt-16 md:pt-0">
      <h1 className="text-3xl font-bold">Configurações</h1>

      <Tabs defaultValue="perfil">
        <TabsList>
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="preferencias">Preferências</TabsTrigger>
        </TabsList>
        <TabsContent value="perfil">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Perfil</CardTitle>
              <CardDescription>
                Atualize suas informações pessoais aqui.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSalvarPerfil}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="nome">Nome</Label>
                    <Input
                      id="nome"
                      value={nomeUsuario}
                      onChange={(e) => setNomeUsuario(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={handleSalvarPerfil}>
                Salvar Alterações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="preferencias">
          <Card>
            <CardHeader>
              <CardTitle>Preferências da Aplicação</CardTitle>
              <CardDescription>
                Personalize sua experiência no FinanceControl.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSalvarPreferencias}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="moeda">Moeda Padrão</Label>
                    <Select value={moeda} onValueChange={setMoeda}>
                      <SelectTrigger id="moeda">
                        <SelectValue placeholder="Selecione a moeda" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="BRL">
                          Real Brasileiro (BRL)
                        </SelectItem>
                        <SelectItem value="USD">
                          Dólar Americano (USD)
                        </SelectItem>
                        <SelectItem value="EUR">Euro (EUR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notificacoes-email">
                      Notificações por Email
                    </Label>
                    <Switch
                      id="notificacoes-email"
                      checked={notificacoesEmail}
                      onCheckedChange={setNotificacoesEmail}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notificacoes-push">Notificações Push</Label>
                    <Switch
                      id="notificacoes-push"
                      checked={notificacoesPush}
                      onCheckedChange={setNotificacoesPush}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="tema-escuro">Tema Escuro</Label>
                    <Switch
                      id="tema-escuro"
                      checked={temaEscuro}
                      onCheckedChange={setTemaEscuro}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={handleSalvarPreferencias}>
                Salvar Preferências
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
