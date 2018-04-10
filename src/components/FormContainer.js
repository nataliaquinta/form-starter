import React, {Component} from 'react';  
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup';  
import SingleInput from './SingleInput';  
import Select from './Select';
import TextArea from './TextArea';

class FormContainer extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      managerName: '',
      dateChange: '',
      storeOptions: [
        'Américas',
        'Botafogo',
        'Center Shopping',
        'Gávea',
        'Jacarepaguá',
        'Metropolitano',     
        'Niteroi',
        'Rio Design Barra',
        'Rio Sul',
        'Quiosque Niteroi',
        'Quiosque Tijuca',
        'Quiosque Via Parque'    
        
      ],
      storeRangeSelection: [],
      questionsAnswered: [],
      auditQuestions: [
        'Uniforme completo',
        'Unhas feitas',
        'Maquiagem suave',
        'Loja e vitrine limpas e organizadas',
        'Produtos expostos corretamente e com preço na loja e vitrine',
        'Extintor na validade',
        'Estoque limpo e organizado',
        'Equipe recebe o cliente de acordo com o padrão L Occitane',
        'Equipe oferece a campanha',
        'Equipe oferece PWP e oferta de caixa',
        'Equipe faz cadastro de clientes',
        'Planilha de experimentação ativa',
        'Há material de embalagem suficiente',
        'É feito acompanhamento diário no INDEVA',
        'Feedback realizado',
        'Formulários de metas preenchidos',
        'Caderno caixa conforme sistema',
        'Há notas canceladas'
    ],
    description: []
    };
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleStoreRangeSelect = this.handleStoreRangeSelect.bind(this);
    this.handleAuditQuestions = this.handleAuditQuestions.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  /*{componentDidMount() {
    fetch('./fake_db.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          managerName: data.managerName,
          dateChange: data.dateChange,
          storeOptions: data.storeOptions,
          storeRangeSelection: data.storeRangeSelection,
          questionsAnswered: data.questionsAnswered,
          auditQuestions: data.auditQuestions,
          description: data.description

        });
    });
  }*/
  
  handleFormSubmit(e) {
    e.preventDefault();

		const formPayload = {
			managerName: this.state.managerName,
			dateChange: this.state.dateChange,
			questionsAnswered: this.state.questionsAnswered,
      storeRangeSelection: this.state.storeRangeSelection,
      description: this.state.description

		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
  }
  handleClearForm(e) {
    e.preventDefault();
		this.setState({
      managerName: '',
      dateChange: '',
      storeRangeSelection: [],
      questionsAnswered: [],
      description: ''
		});
  }

  handleFullNameChange(e) {
    //name  
    this.setState({ managerName: e.target.value });
  }

  handleDateChange(e) {
    //date
    this.setState({dateChange: e.target.value});
  }

  handleStoreRangeSelect(e) {
    //lojas
    this.setState({storeRangeSelection: e.target.value})
  }

  handleAuditQuestions(e) {
		const newSelection = e.target.value;
		let newSelectionArray;
		if(this.state.questionsAnswered.indexOf(newSelection) > -1) {
			newSelectionArray = this.state.questionsAnswered.filter(s => s !== newSelection)
		} else {
			newSelectionArray = [...this.state.questionsAnswered, newSelection];
		}
		this.setState({ questionsAnswered: newSelectionArray });
  }
  
  handleDescriptionChange(e) {
    //obs
    this.setState({description: e.target.value})
  }



  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <SingleInput 
        inputType={'text'}
        title={'Nome'}
        name={'managerName'}
        controlFunc={this.handleFullNameChange}
        content={this.state.managerName}
        placeholder={'Nome da supervisora'}
        /> 
        <SingleInput 
        inputType={'text'}
        title={'Data'}
        name={'dateChange'}
        controlFunc={this.handleDateChange}
        content={this.state.dateChange}
        placeholder={'dd/mm/aaaa'}
        /> 
        <Select 
        name={'storeRange'}
        placeholder={'Escolha a loja'}
        controlFunc={this.handleStoreRangeSelect}
        options={this.state.storeOptions}
        selectedOption={this.state.storeRangeSelection}
        /> 
        <CheckboxOrRadioGroup
        title={'Marque as sentenças verdadeiras:'}
        setName={'questions'}
        type={'checkbox'} 
        controlFunc={this.handleAuditQuestions}
        options={this.state.auditQuestions}
        selectedOptions={this.state.questionsAnswered}
         /> 

         <TextArea 
         title={'Observações'}
         rows={5}
         resize={false}
         content={this.state.description}
         name={'currentPetInfo'}
         controlFunc={this.handleDescriptionChange}
         placeholder={'Não esqueça de ~Enviar~ o formulário :-)'}
         />
        
        <input
          type="submit"
          className="btn"
          value="Enviar"/>
        <button
          className="btn-link "
          onClick={this.handleClearForm}>Limpar formulário</button>
      </form>
  );
}

}


export default FormContainer;
