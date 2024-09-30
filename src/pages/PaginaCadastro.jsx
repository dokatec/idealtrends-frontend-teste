import React, { useState } from "react";
import axios, { toFormData } from "axios";
import { toast } from "react-toastify";

import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import "../styles/global.css";
import "../styles/responsive.css";
import background from "../assets/background.png";
import logo from "../assets/logo.svg";

export default function PaginaCadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
      });
      toast.success(`Usuário cadastrado com sucesso`);
      toast.info(`Nome: ${name}, E-mail: ${email}`);
    } catch (error) {
      toast.error("Erro ao cadastrar usuário.");
    }
  };

  return (
    <main>
      <section className="container-apresentacao">
        <img className="img-apresentacao" src={background} alt="" />
        <img className="img-logo" src={logo} alt="" />
        <div>
          <h2>Transforme seu corpo e sua mente com a GymLife academia!</h2>
          <p>
            Aqui é onde o suor se transforma em sucesso. Não espere. Comece
            agora a sua jornada fitness.
          </p>
        </div>
      </section>
      <section className="container-cadastro">
        <article className="container-cadastro_textos">
          <h2>Vamos começar</h2>
          <p>Crie sua conta agora</p>
        </article>
        <form onSubmit={handleSubmit}>
          <label>Nome completo</label>
          <Input
            className="input-form"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="nome"
            placeholder="Digite seu nome"
          />
          <label>E-mail</label>
          <Input
            className="input-form"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Digite seu email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <label>Senha</label>
          <Input
            className="input-form"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Digite sua senha"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            minLength="8"
          />
          <label>Confirmação de Senha</label>
          {/* <Input
            className="input-form"
            type="password"
            name="confirmaSenha"
            id="confirmaSenha"
            placeholder="Digite sua senha"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          /> */}
          <Button type="submit" name="Criar conta" />
          <p>
            Ja tem uma conta? <a href="#">Acesse aqui</a>
          </p>
        </form>
      </section>
    </main>
  );
}
