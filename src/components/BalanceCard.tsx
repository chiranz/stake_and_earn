import React, { ReactElement } from "react";
import Button from "./tailwind/Button";
import Card from "./tailwind/Card";

type BalanceType = "staking" | "wallet" | "claimable";

type Token = {
  symbol: string;
  balance: number;
  type: BalanceType;
};

interface Props {
  tokens: Token[];
}

export default function BalanceCard({ tokens }: Props): ReactElement {
  const getActionText = (balanceType: BalanceType) =>
    balanceType === "claimable"
      ? "Claim"
      : balanceType === "staking"
      ? "Unstake"
      : "Stake";
  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-4 m-4 border">
      {tokens.map((token) => (
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{`${token.symbol} ${token.type} balance`}</Card.Title>
            <Card.Text className="text-lg font-bold">{token.balance}</Card.Text>
            <Card.Actions>
              <Button className="bg-green-500">
                {getActionText(token.type)}
              </Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
