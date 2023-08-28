import { PropsWithChildren } from "react";
import { Button } from "@app/components";
import { useCount } from "@app/hooks";

type Props = {
  teamA: string;
  teamB: string;
};

const TeamName = ({ children }: PropsWithChildren) => {
  return <div className="text-center text-3xl">{children}</div>;
};

const TeamScore = ({ children }: PropsWithChildren) => {
  return <div className="py-4 text-center text-5xl">{children}</div>;
};

type ScoreButtonsProps = {
  incrementer: ReturnType<typeof useCount>["increment"];
};

const ScoreButtons = ({ incrementer }: ScoreButtonsProps) => {
  return (
    <div className="flex justify-center gap-2">
      <Button onClick={incrementer()}>+1</Button>
      <Button onClick={incrementer(2)}>+2</Button>
      <Button onClick={incrementer(3)}>+3</Button>
    </div>
  );
};

type TeamProps = {
  name: string;
  score: number;
  onScore: ScoreButtonsProps["incrementer"];
};

const Team = ({ name, score, onScore }: TeamProps) => {
  return (
    <div className="flex flex-col gap-2">
      <TeamName>{name}</TeamName>
      <TeamScore>{score}</TeamScore>
      <ScoreButtons incrementer={onScore} />
    </div>
  );
};

export const ScoreBoard = ({ teamA, teamB }: Props) => {
  const { count: scoreA, increment: incrementA } = useCount();
  const { count: scoreB, increment: incrementB } = useCount();

  return (
    <div className="flex flex-row items-center gap-5">
      <Team name={teamA} score={scoreA} onScore={incrementA} />
      <div>vs</div>
      <Team name={teamB} score={scoreB} onScore={incrementB} />
    </div>
  );
};
