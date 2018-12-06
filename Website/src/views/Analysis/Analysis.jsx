import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import {LabelOutlined} from "@material-ui/icons";

class Analysis extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Descrição do problema</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>Na primeira fase, fizemos uma proposta de um sistema que pudesse auxiliar os
                            seus utilizadores na gestão das suas poupanças, através do registo de despesas e
                            proveitos, bem como informação relevante sobre os mesmos.</p>
                        <p>Nesta fase, o problema passa por exatamente, como conceber o nosso sistema de
                            forma a ser a melhor alternativa que os nossos utilizadores terão para atingir esse
                            objectivo.</p>
                        <p>Para tal, iremos proceder a um estudo sobre as caracteristicas do nosso público
                            alvo, e das tarefas e objectivos que estes poderam ter ao usar o nosso sistema, este estudo
                            irá ajudar-nos a melhor perceber como conceber/melhorar o nosso sistema, e assim
                            maximizar o nível de aderência a ele por parte da população geral.</p>
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Análise dos utilizadores</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>A savr é uma plataforma dirigida a pessoas de todas as idades, desde que dispostas
                            a utilizar meios informáticos. Por se tratar de uma plataforma simples, não é recomentada
                            para utilizadores que pretendam um sistema complexo e altamente versátil. Como tal, o
                            público-alvo pode ser classificado em dois grupos distintos:</p>
                        <p className={classes.bulletText}>
                            &bull; <b>Pouco proficientes no uso de computadores:</b> utilizadores com mais dificuldades
                            em utilizar sistemas informáticos; tipicamente, utilizadores de idade mais elevada. Estes
                            utilizadores requerem uma interface muito intuitiva e uma curva de aprendizagem pouco
                            acentuada. O potencial utilizador que considerámos para a entrevista não usa nem tem
                            grande conhecimento de sistemas informáticos que o pudessem auxiliar na tarefa de gerir
                            as suas poupanças. O facto de não conhecer sistemas existentes constitui uma das razões
                            para a não utilização destes.
                        </p>
                        <p className={classes.bulletText}>
                            &bull; <b>Proficientes no uso de computadores:</b> são os utilizadores que aprendem a utilizar
                            o sistema com mais facilidade; tipicamente, são os utilizadores de menor idade. Optariam
                            por utilizar uma plataforma simples como a savr, não pela dificuldade em utilizar uma mais
                            complexa, mas por responder às suas necessidades. O potencial utilizador que
                            considerámos para a entrevista também não usa nenhum sistema informático para o
                            auxiliar na gestão das suas poupanças. Embora este potencial utilizador já tenha
                            conhecimento da existência de tais sistemas, para ele, o uso destes não compensa o
                            esforço e o tempo exigido para os aprender/utilizar, comparativamente a outros métodos
                            como papel e caneta, ou anotação mental.
                        </p>
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Análise das tarefas</Typography>
                </Paper>
                <Paper>
                    <Paper>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Tarefa 1.</b> Criar conta de utilizador.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p><b>Pré-condição</b> – O utilizador encontra-se na página inicial do sistema Savr.</p>
                            <p><b>Objectivo</b> – Registar a minha informação pessoal básica de forma a criar uma conta de
                                utilizador com a qual poderei usar o sistema.</p>
                            <p><b>Descrição</b> – Introduzir username, email e password, seleccionar o país do utilizador (a
                                moeda correcta seria automaticamente seleccionada).</p>
                            <p><b>Exceção</b> – Introdução de valores de username, email, password e/ou país não válidos.</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Tarefa 2.</b> Introduzir um gasto.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p><b>Pré-condição</b> – O utilizador está autenticado pelo sistema.</p>
                            <p><b>Objectivo</b> – Registar um novo gasto de forma a atualizar seu o saldo e histórico de
                                despesas.</p>
                            <p><b>Descrição</b> – Introduzir um valor, selecionar uma categoria e, opcionalmente, introduzir
                                uma descrição.</p>
                            <p>(O sistema tem de criar a categoria no caso de o utilizador pretender uma não existente.
                                Após a operação, o sistema tem de atualizar o gráfico da página principal e atualizar o
                                valor do saldo).</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Tarefa 3.</b> Introduzir uma receita.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p><b>Pré-condição</b> – O utilizador está autenticado pelo sistema.</p>
                            <p><b>Objectivo</b> – Registar uma nova receita de forma a atualizar seu o saldo e histórico de
                                receitas.</p>
                            <p><b>Descrição</b> – Introduzir um valor, selecionar uma categoria e, opcionalmente, introduzir
                                uma descrição.</p>
                            <p>(O sistema tem de criar a categoria no caso de o utilizador pretender uma não existente.
                                Após a operação, o sistema tem de atualizar o gráfico da página principal e atualizar o
                                valor do saldo).</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Tarefa 4.</b> Mostrar o gráfico pretendido.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p><b>Pré-condição</b> – O utilizador está autenticado pelo sistema.</p>
                            <p><b>Objectivo</b> – Obter uma representação gráfica da gestão do saldo na plataforma.</p>
                            <p><b>Descrição</b> – Selecionar o tempo (início e fim), tipo de gráfico (circular, barras, etc),
                                filtros (categorias, o que fosse preciso...), perguntas (conteúdo a ser mostrado).</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Tarefa 5.</b> Gerar PDF de um gráfico de gastos.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p><b>Pré-condição</b> – O utilizador está autenticado pelo sistema e tem histórico de gastos e/ou
                                receitas no período de tempo.</p>
                            <p><b>Objectivo</b> – Obter um PDF para um determinado gráfico pretendido.</p>
                            <p><b>Descrição</b> – Seleccionar para um gráfico a opção de visualizar gastos por categoria,
                                seleccionar o periodo de tempo pretendido para o gráfico, editar cores e filtros do gráfico
                                (opcional), clicar no botão de gerar PDF.</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Tarefa 6.</b> Mostrar o histórico.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p><b>Pré-condição</b> – O utilizador está autenticado pelo sistema.</p>
                            <p><b>Objectivo</b> – Mostrar o histórico de gastos e receitas.</p>
                            <p><b>Descrição</b> – Selecionar o menu Histórico na barra de navegação da
                                plataforma. Ou, se o utilizador está atualmente na página principal, clicar no botão
                                “Show more” na secção do histórico localizada na parte lateral direita da página principal.</p>
                        </Typography>
                    </Paper>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Concepção dos cenários</Typography>
                </Paper>
                <Paper>
                    <Paper>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Cenário 1.</b> Nova despesa.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p>O Manuel trocou o seu automóvel antigo a gasolina por um mais moderno com motor a gasóleo
                                para conseguir poupar algum dinheiro sempre que ia às bombas encher o depósito de
                                combustível. Mas recentemente, e já fora da garantia, o automóvel só tem dado problemas
                                e, claro, muitas despesas inesperadas. </p>
                            <p>    Com o aparecimento de uma luz de aviso relativa
                                ao motor, o Manuel teve que levar o seu automóvel à oficina. Após inspeção dos mecânicos
                                foi descoberto que o problema estava no filtro de partículas e que este tinha de ser
                                trocado. A reparação não foi barata, mas o Manuel não teve alternativa e pagou 975€ pelo
                                novo filtro e pelo serviço dos mecânicos.</p>
                            <p>Ajude o Manuel a introduzir a nova despesa.</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Cenário 2.</b> Geração de gráfico.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p>Com os recentes gastos inesperados, o Manuel está preocupado com as suas poupanças.</p>
                            <p>Ajude o Manuel a visualizar num gráfico de barras todas as suas despesas durante
                            o mês anterior (setembro) de forma a poder organizar melhor o seu orçamento para o mês
                            atual (outubro).</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Cenário 3.</b> Gráfico em PDF.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p>Depois das demasiadas despesas que o automóvel lhe está a causar, o Manuel está a
                                ponderar se deve ou não trocar de automóvel. Para o ajudar na decisão, ele gostava de
                                visualizar todos os seus gastos no automóvel no ano de 2017.</p>
                            <p>Ajude o Manuel a obter em PDF o gráfico pretendido.</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Cenário 4.</b> Histórico.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p>Logo após uma revisão ao automóvel, o Manuel quer comparar os gastos com a revisão
                                anterior que aconteceu em março de 2017.</p>
                            <p>Ajude o Manuel a fazer essa comparação.</p>
                        </Typography>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

const style = {
    text: {
        marginLeft: "5%",
        marginRight: "5%",
        padding: "10px",
        textAlign: "justify",
        fontSize: "15px",
    },
    centerText: {
        display: "table",
        margin: "0 auto",
    },
    paper: {
        display: "table",
        margin: "20px 0 5px 0",
        alignText: "center",
        padding: "15px"
    },
    centerSubtitle: {
        display: "table",
        margin: "0 auto",
        alignText: "center",
        padding: "15px",
        fontSize: "14px"
    },
    icon: {
        marginRight: "5px"
    },
    centerImage: {
        display: "block",
        margin: "10px auto 10px auto"
    },
    imageLegend: {
        paddingBottom: "5px"
    },
    bulletText: {
        padding: "10px 0 10px 20px",
    }
};

export default withStyles(style)(Analysis);
