import type React from "react";



interface IcardProps {
  title: string
  children: React.ReactNode
}

const Card = (props: IcardProps) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <span>Title: {props.title}</span>
      <div>
        {props.children}
      </div>
      <div>
        Footer
      </div>
    </div>

  );
}





export function App() {

  return (
    <div>
      Olá

      <p>Card: </p>
      <Card title="Teste de Props">
        Teste de Children
      </Card>


    </div>
  );
}
