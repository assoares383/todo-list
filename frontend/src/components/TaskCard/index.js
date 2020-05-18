import React, { useMemo } from "react";
import { format } from "date-fns";

import typeIcons from "../../utils/typeIcons";

import { BottomCard, Card, TopCard } from "./styles";

export default function TaskCard({ type, title, when }) {
  const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"));
  const hour = useMemo(() => format(new Date(when), "HH:mm"));

  return (
    <Card>
      <TopCard>
        <img src={typeIcons[type]} alt="Icone da Tarefa" />
        <h3 className="title">{title}</h3>
      </TopCard>
      <BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </BottomCard>
    </Card>
  );
}
