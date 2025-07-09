import { useState, useEffect } from 'react'
import styles from './App.module.css'

function Resultado() {
	const [peso, setPeso] = useState('')
	const [altura, setAltura] = useState('')
	const [imc, setImc] = useState(null)
	const [mostrarResultado, setMostrarResultado] = useState(false);

	// useEffect faz o cálculo automaticamente quando peso/altura mudam
	useEffect(() => {
		if (peso && altura && parseFloat(altura) !== 0) {
			const imcCalculado = peso / (altura * altura)
			setImc(imcCalculado.toFixed(2))
		} else {
			setImc(null)
		}
	}, [peso, altura])

	const handleCalcular = () => {
		if (!peso || !altura) {
			alert('Por favor, preencha os campos de peso e altura.');
			setMostrarResultado(false);
			return;
		}

		if (parseFloat(peso) >= 600 || parseFloat(peso) <= 0) {
			alert('Peso deve ser realista');
			setMostrarResultado(false);
			return;
		}

		if (parseFloat(altura) >= 3) {
			alert('Altura deve ser em metros (ex: 1.75).');
			setMostrarResultado(false);
			return;
		}

		if (parseFloat(altura) === 0) {
			alert('Altura não pode ser zero.');
			setMostrarResultado(false);
			return;
		}

		setMostrarResultado(true);
	};

	const limparCampos = () => {
		setPeso('');
		setAltura('');
		setImc(null);
		setMostrarResultado(false);
	};


	return (
		<div className={styles.container}>
			<h1 className={styles.header} >Calculadora de IMC</h1>
			<div className={styles.form}>
				<label className={styles.botaoNumero}>
					Peso (kg):
					<input className={styles.inputDados} type="number" placeholder='Qual seu peso ?' value={peso} onChange={(e) => setPeso(e.target.value)} />
				</label>
				<label className={styles.botaoNumero} >
					Altura (m):
					<input className={styles.inputDados} type="number" placeholder='Qual sua altura ?' value={altura} onChange={(e) => setAltura(e.target.value)} />
				</label>
			</div>
			<div className={styles.botoes}>
				<button className={styles.botaoCalcular} onClick={handleCalcular}>Calcular IMC</button>
				<button className={styles.botaoLimpar} onClick={limparCampos}>
					Limpar Campos
				</button>
			</div>
			{mostrarResultado && (
				<div className={styles.resultado}>
					<h3>Seu Resultado:</h3>
					{imc && <p className={styles.resultadoParagrafo} >Seu IMC é: {imc}</p>}
					<p>Classificação:</p>
					<p className={styles.resultadoParagrafo}>
						{imc < 18.5 ? 'Abaixo do peso' :
							imc < 24.9 ? 'Peso normal' :
								imc < 29.9 ? 'Sobrepeso' :
									imc < 34.9 ? 'Obesidade grau 1' :
										imc < 39.9 ? 'Obesidade grau 2' :
											'Obesidade grau 3'}
					</p>
				</div>
			)}
		</div>
	)
}

export default Resultado;
