import './App.css'

function TituloFormulario (props) {
  return (
    <h2>{props.children}</h2>
  )
}

function CampoFormulario ({children}) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}
function Label({children, htmlFor}){
  return (
    <label htmlFor={htmlFor}>{children}</label>
  )
}

function FormularioDeEvento () {

  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoFormulario>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <input type="text" id='nome' placeholder='Summer dev hits'/>
      </CampoFormulario>
    </form>
  )
}

function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt=" "/>
      </header>
      <section>
        <img src="/banner.png" alt=" "/>
      </section>
      <FormularioDeEvento/>
    </main>
  )
}

export default App
