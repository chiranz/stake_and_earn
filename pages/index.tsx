import { NavbarPage } from "../src/layout/Navbar";
import { Footer } from "../src/layout/Footer";
import Field from "../src/components/tailwind/Field";
import Button from "../src/components/tailwind/Button";
import BalanceCard from "../src/components/BalanceCard";

export default function Home() {
  return (
    <div className="h-full">
      <NavbarPage />
      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto mt-20">
        <h1 className="text-3xl">Stake and Earn CHI Token</h1>
        <div className="max-w-lg">
          <BalanceCard
            tokens={[
              { balance: 100, symbol: "DAI", type: "wallet" },
              { balance: 100, symbol: "DAI", type: "staking" },
            ]}
          />
          <BalanceCard
            tokens={[
              { balance: 100, symbol: "CHI", type: "wallet" },
              { balance: 0, symbol: "CHI", type: "claimable" },
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
