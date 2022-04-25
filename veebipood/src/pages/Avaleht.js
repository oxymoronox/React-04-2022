import { useState } from "react";

function Avaleht() {
  // otsi HTMLis üles see kohta ja muuda 'useState' mnuidu ei muudeta.
  const [s6na, muudaS6na] = useState("50");
  const [numbriline, muudaNumber] = useState(50);
  const [kahendV22rtus, muudaKahendV22rtust] = useState(true);

  function muudaK6ik() {
    muudaS6na("kolmas sõna");
    muudaNumber(312312);
    muudaKahendV22rtust(false);
  }

  return (
    <div>
      <div>{s6na}</div>
      <div>{numbriline}</div>
      <div>{kahendV22rtus.toString()}</div>
      <div>{numbriline + numbriline}</div>
      <div>{kahendV22rtus + kahendV22rtus}</div>
      <div>{s6na + s6na}</div>
      {kahendV22rtus && <div>Vahepeal näitan seda, vahepeal ei näita</div>}
      <button onClick={() => muudaK6ik()}>Muuda kõik</button>
      <button onClick={() => muudaS6na("uus s6na")}>
        Anna sõnale uus väärtus
      </button>
      <button onClick={() => muudaKahendV22rtust(!kahendV22rtus)}>
        Muuda kahendaväärtust
      </button>
    </div>
  );
}

export default Avaleht;

// .toString - kui tahan true/false välja näidata
