import { useState, useEffect } from 'react'
import styles from './styles/App.module.css'

function Resultado() {
	const [peso, setPeso] = useState('')
	const [altura, setAltura] = useState('')
	const [imc, setImc] = useState(null)

	useEffect(() => {
		if (peso && altura) {
			const imcCalculado = peso / (altura * altura)
			setImc(imcCalculado.toFixed(2))
		} else {
			setImc(null)
		}
	}, [peso, altura])

	return (
		<div className={styles.container} >
			<h1>Calculadora de IMC</h1>
			<form >
				<label>
					Peso (kg):
					<input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
				</label>
				<br />
				<label>
					Altura (m):
					<input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
				</label>
				<br />
				<div>
					{imc && <p>Seu IMC é: {imc}</p>}
				</div>
			</form>
		</div>
	)
}

export default Resultado;
