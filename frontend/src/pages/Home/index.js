import React, { useState, useEffect } from "react";

import { Button, Container, Title } from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";

export default function Home() {
  const [filterActived, setFilterActived] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then((response) => {
        setTasks(response.data);
      });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  function Notification() {
    setFilterActived("late");
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActived]);

  return (
    <>
      <Header lateCount={lateCount} clickNotification={Notification} />
      <Container>
        <Button
          type="button"
          onClick={() => setFilterActived("all")}
          className={filterActived == "all" ? "active" : ""}
        >
          <FilterCard title="Todos" />
        </Button>
        <Button
          type="button"
          onClick={() => setFilterActived("today")}
          className={filterActived == "today" ? "active" : ""}
        >
          <FilterCard title="Hoje" />
        </Button>
        <Button
          type="button"
          onClick={() => setFilterActived("week")}
          className={filterActived == "week" ? "active" : ""}
        >
          <FilterCard title="Semana" />
        </Button>
        <Button
          type="button"
          onClick={() => setFilterActived("month")}
          className={filterActived == "month" ? "active" : ""}
        >
          <FilterCard title="Mês" />
        </Button>
        <Button
          type="button"
          onClick={() => setFilterActived("year")}
          className={filterActived == "year" ? "active" : ""}
        >
          <FilterCard title="Ano" />
        </Button>
      </Container>
      <Title>
        <h3>{filterActived == "late" ? "Tarefas Atrasadas" : "Tarefas"}</h3>
      </Title>
      <Container>
        {tasks.map((task) => (
          <TaskCard
            key={task.title}
            type={task.type}
            title={task.title}
            when={task.when}
          />
        ))}
      </Container>
    </>
  );
}
