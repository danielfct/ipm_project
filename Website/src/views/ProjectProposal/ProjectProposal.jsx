import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import {LabelOutlined} from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import monefy from "assets/images/monefy.png";
import classNames from "classnames";

class ProjectProposal extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Descrição do Projeto</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>Como membros de uma sociedade consumista moderna a passar por uma
                            fase de inflação sem grandes perspectivas de melhorias, torna-se cada vez mais
                            imprescindível sabermos gerir o nosso dinheiro de forma inteligente e prática.</p>
                        <p>Infelizmente, muitas vezes por falta de tempo, disponibilidade, lapsos de
                            memória etc, a tarefa de manter registo dos nossos gastos torna-se excessivamente
                            complicada e pouco fiável.</p>
                        <p>O problema passa, muitas vezes, por não termos nem uma estratégia bem
                            definida sobre como gerir as nossas poupanças, nem os meios de registar de
                            forma ergonómica os nossos gastos a qualquer altura do dia.</p>
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Utilizadores-alvo</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>A plataforma savr tem como alvo todos os utilizadores que pretendam um
                            sistema simples e acessível para gerir as suas poupanças. O sistema poderá ter
                            algumas funcionalidades avançadas, mas a implementação destas não será feita
                            de modo a dificultar a utilização apenas das funcionalidades básicas do sistema.</p>
                        <p>Por outro lado, a savr não é o sistema mais adequado para um utilizador
                            que queira um sistema complexo; com muitas opções de personalização, funcionalidades
                            empresariais etc.</p>
                        <p>O público-alvo não está restrito a faixas etárias ou zonas geográficas, pelo
                            que, a ferramenta é direccionada a qualquer pessoa com acesso à internet e disposição
                            para enfrentar a pouco acentuada curva de aprendizagem.</p>
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Objectivo do Projecto</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>O objectivo do projecto é fornecer uma solução elegante e altamente intuitiva
                            para a gestão de poupanças (ou dinheiro, no sentido lato). Tratar-se-á de uma
                            aplicação baseada na Web.</p>
                        <p>A savr terá um ecrã inicial que apresentará ao utilizador um gráfico que o
                            informará da proporção de gastos que tem feito nas categorias existentes (o utilizador
                            pode criar novas categorias). O tipo de gráfico poderá ser alterado pelo utilizador
                            conforme este pretender. Neste ecrã, terá também a possibilidade de registar
                            receitas ou gastos, sendo que neste último, terá obrigatoriamente de o associar
                            a uma categoria.</p>
                        <p>O sistema terá uma página para a visualização dos mais variados gráficos,
                            conforme o utilizador pretender: gastos por categoria, gastos numa categoria nos
                            12 meses de um ano, entre outras. Esta página terá um modo avançado que
                            permitirá ao utilizador personalizar todos os aspectos do gráfico: tipo, cores, escalas
                            e outros. Após o fazer, poderá descarregá-lo como PDF.</p>
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Aplicação Concorrente</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>A plataforma savr tem um objectivo semelhante ao da aplicação Android
                            Monefy. Esta última é uma aplicação simples e de utilização intuitiva.</p>
                        <p>No entanto, tem alguns problemas de design. Em primeiro lugar, não segue
                            as directrizes de design do Android. Como tal, há elementos (botões, menus, etc)
                            que têm um aspecto significativamente diferente do que está presente na maioria
                            das outras aplicações do sistema operativo. Isto resulta numa maior curva de
                            aprendizagem para os utilizadores. Adicionalmente, há uma certa inconsistência
                            no tamanho das letras e dos números na aplicação.</p>
                    </Typography>
                    <img src={monefy} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>Android App Monefy</Typography>
                </Paper>
            </div>
        )
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
    icon: {
        marginRight: "5px"
    },
    centerImage: {
        display: "block",
        margin: "10px auto 10px auto"
    },
    imageLegend: {
      paddingBottom: "5px"
    }
};

export default withStyles(style)(ProjectProposal);
