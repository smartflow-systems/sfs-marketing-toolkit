import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator as CalcIcon, Percent, DollarSign, Activity } from "lucide-react";

export default function Calculator() {
  const [tipAmount, setTipAmount] = useState(0);
  const [tipBill, setTipBill] = useState("100");
  const [tipPercent, setTipPercent] = useState("15");

  const [loanAmount, setLoanAmount] = useState("200000");
  const [loanRate, setLoanRate] = useState("3.5");
  const [loanYears, setLoanYears] = useState("30");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateTip = () => {
    const bill = parseFloat(tipBill) || 0;
    const percent = parseFloat(tipPercent) || 0;
    const tip = (bill * percent) / 100;
    setTipAmount(tip);
    console.log('Tip calculated:', tip);
  };

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(loanRate) || 0) / 100 / 12;
    const payments = (parseFloat(loanYears) || 0) * 12;
    
    if (rate === 0) {
      setMonthlyPayment(principal / payments);
    } else {
      const payment = principal * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
      setMonthlyPayment(payment);
    }
    console.log('Loan calculated');
  };

  return (
    <Card className="p-6">
      <Tabs defaultValue="tip" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tip" data-testid="tab-tip">
            <DollarSign className="h-4 w-4 mr-2" />
            Tip
          </TabsTrigger>
          <TabsTrigger value="loan" data-testid="tab-loan">
            <CalcIcon className="h-4 w-4 mr-2" />
            Loan
          </TabsTrigger>
          <TabsTrigger value="percent" data-testid="tab-percent">
            <Percent className="h-4 w-4 mr-2" />
            Percent
          </TabsTrigger>
          <TabsTrigger value="bmi" data-testid="tab-bmi">
            <Activity className="h-4 w-4 mr-2" />
            BMI
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tip" className="space-y-4">
          <h3 className="text-xl font-semibold">Tip Calculator</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="bill">Bill Amount ($)</Label>
              <Input
                id="bill"
                type="number"
                value={tipBill}
                onChange={(e) => setTipBill(e.target.value)}
                data-testid="input-bill"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tip-percent">Tip Percentage (%)</Label>
              <Input
                id="tip-percent"
                type="number"
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.value)}
                data-testid="input-tip-percent"
              />
            </div>
            <Button onClick={calculateTip} className="w-full" data-testid="button-calculate-tip">
              Calculate Tip
            </Button>
            {tipAmount > 0 && (
              <div className="p-4 rounded-lg bg-primary/10 text-center">
                <div className="text-sm text-muted-foreground">Tip Amount</div>
                <div className="text-3xl font-bold text-primary" data-testid="text-tip-result">
                  ${tipAmount.toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Total: ${(parseFloat(tipBill) + tipAmount).toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="loan" className="space-y-4">
          <h3 className="text-xl font-semibold">Loan Calculator</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="loan-amount">Loan Amount ($)</Label>
              <Input
                id="loan-amount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                data-testid="input-loan-amount"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest-rate">Interest Rate (%)</Label>
              <Input
                id="interest-rate"
                type="number"
                step="0.1"
                value={loanRate}
                onChange={(e) => setLoanRate(e.target.value)}
                data-testid="input-interest-rate"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loan-years">Loan Term (years)</Label>
              <Input
                id="loan-years"
                type="number"
                value={loanYears}
                onChange={(e) => setLoanYears(e.target.value)}
                data-testid="input-loan-years"
              />
            </div>
            <Button onClick={calculateLoan} className="w-full" data-testid="button-calculate-loan">
              Calculate Payment
            </Button>
            {monthlyPayment > 0 && (
              <div className="p-4 rounded-lg bg-primary/10 text-center">
                <div className="text-sm text-muted-foreground">Monthly Payment</div>
                <div className="text-3xl font-bold text-primary" data-testid="text-payment-result">
                  ${monthlyPayment.toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="percent" className="space-y-4">
          <h3 className="text-xl font-semibold">Percentage Calculator</h3>
          <p className="text-muted-foreground">Coming soon...</p>
        </TabsContent>

        <TabsContent value="bmi" className="space-y-4">
          <h3 className="text-xl font-semibold">BMI Calculator</h3>
          <p className="text-muted-foreground">Coming soon...</p>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
