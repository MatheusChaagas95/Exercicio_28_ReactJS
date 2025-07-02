import { useState, useEffect } from 'react'
import styles from './styles/App.module.css'
import { CalculadoraIMC } from './App.jsx'

function App() {
		const [peso, setPeso] = useState('')
		const [altura, setAltura] = useState('')
		const [imc, setImc] = useState(null)

		useEffect(() => {
			const calcularIMC = () => {
				if (peso && altura) {
					const imcCalculado = peso / (altura * altura)
					setImc(imcCalculado.toFixed(2))
				} else {
					setImc(null)
				}
			}
			calcularIMC();
		}, [peso, altura])
	return (
		<div className={styles.container}>
			<h1>Calculadora de IMC</h1>
			<form onSubmit={(e) => e.preventDefault()}>
				<label> Peso (kg):
					<input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
				</label>
				<br />
				<label> Altura (m):
					<input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
				</label>
				<br />
				<button type="submit">Calcular IMC</button>
				<CalculadoraIMC imc={imc} />
			</form>
		</div>
	)
}

export default App