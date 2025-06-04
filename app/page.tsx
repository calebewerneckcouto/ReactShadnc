"use client"

import { useState } from "react";
import { ErrorMessage } from "@/components/ErrorMessage";
import { LoginForm } from "@/components/login-form";
import { TeamArea } from "@/components/team/team-area";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [activeTab, setActiveTab] = useState("login"); // 'login' ou 'config'

  return (
    <div className="mx-auto w-full min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle>Área do Usuário</CardTitle>
            <div className="flex space-x-4 mt-4">
              <Button
                variant={activeTab === "login" ? "default" : "outline"}
                onClick={() => setActiveTab("login")}
              >
                Login
              </Button>
              <Button
                variant={activeTab === "config" ? "default" : "outline"}
                onClick={() => setActiveTab("config")}
              >
                Configurações
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            {activeTab === "login" ? (
              <LoginForm />
            ) : (
              <div className="space-y-4">
                <ThemeToggle />
                <TeamArea />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
