import './cards.css';

export const About = () => {
    return(
        <section className="section" id="units">
            <div className="columns is-mobile is-centered is-multiline">
                <div className="column is-12-mobile is-4-tablet is-4-desktop is-3-widescreen">
                    <div className="card card-equal-height">
                        <div className="card-content">
                            <div className="media">
                                <div className="content has-text-centered">
                                    <h3 className="title">Missão</h3>
                                    <p className="subtitle">
                                        Prestar atendimento especializado ao indivíduo, casal e família com excelência e ética, visando o cuidado com a vida, bem estar das pessoas e superação das dificuldades.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="column is-12-mobile is-4-tablet is-4-desktop is-3-widescreen">
                    <div className="card card-equal-height">
                        <div className="card-content">
                            <div className="media">
                                <div className="content has-text-centered">
                                    <h3 className="title">Visão</h3>
                                    <p className="subtitle">
                                        Tornar-se referência em Clínica de Psicologia e Psiquiatria no Interior do Estado de São Paulo. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-12-mobile is-4-tablet is-4-desktop is-3-widescreen">
                    <div className="card card-equal-height">
                        <div className="card-content">
                            <div className="media">
                                <div className="content has-text-centered">
                                    <h3 className="title">Valores</h3>
                                    <p className="subtitle">
                                        Respeito;
                                        Ética;
                                        Empatia;
                                        Colaboração;
                                        Responsabilidade;
                                        Humanização.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}
