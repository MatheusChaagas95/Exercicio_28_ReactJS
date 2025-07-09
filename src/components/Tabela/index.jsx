import styles from  './Tabela.module.css';

const Tabela = ({ imc }) => {
	return (
		<div className={styles.tabela}>
			<h2 className={styles.tabelaH2} >Tabela de IMC</h2>
			<h3 className={styles.Referencia}>Referência da Organização Mundial da Saúde (OMS)</h3>
			<table className={styles.tabelaIMC}>
				<thead>
					<tr>
						<th>Faixa de IMC</th>
						<th>Classificação:</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Abaixo de 18.5</td>
						<td>Abaixo do peso</td>
					</tr>
					<tr>
						<td>18.5 - 24.9</td>
						<td>Peso normal</td>
					</tr>
					<tr>
						<td>25 - 29.9</td>
						<td>Sobrepeso</td>
					</tr>
					<tr>
						<td>30 - 34.9</td>
						<td>Obesidade grau 1</td>
					</tr>
					<tr>
						<td>35 - 39.9</td>
						<td>Obesidade grau 2 (severa)</td>
					</tr>
					<tr>
						<td>Maior que 40</td>
						<td>Obesidade grau 3 (mórbida)</td>
					</tr>
				</tbody>
				{ imc }
			</table>
		</div>
	);
}

export default Tabela;