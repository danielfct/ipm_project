import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import {LabelOutlined} from "@material-ui/icons";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";

class Presentation extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Problemas e respectivas correções</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>Os seguintes problemas foram encontrados pelo grupo que efectuou a avaliação heurística ao
                            nosso projecto. Com base nessas sugestões/críticas, efectuámos as respectivas correções ao
                            nosso projecto.</p>
                    </Typography>
                    <Typography className={classes.text}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell numeric>Número</TableCell>
                                    <TableCell>Problema</TableCell>
                                    <TableCell>Solução</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell numeric component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell>Palavra-passe visivel.</TableCell>
                                    <TableCell>Corrigimos o site para ocultar a palavra-passe (o procedimento padrão
                                        para outros sites).</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell numeric component="th" scope="row">
                                        2
                                    </TableCell>
                                    <TableCell>Inserir uma despesa.</TableCell>
                                    <TableCell>Os botões para adicionar uma receita/despesa agora dizem "ADICIONAR
                                        RECEITA" e "ADICIONAR DESPESA" respectivamente.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell numeric component="th" scope="row">
                                        3
                                    </TableCell>
                                    <TableCell>Falta de feedback na inserção de uma despesa.</TableCell>
                                    <TableCell>Acrescentámos uma pequena janela que aparece ao adicionar despesa/receita
                                        a informar o utilizador que a acção foi bem sucedida.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell numeric component="th" scope="row">
                                        4
                                    </TableCell>
                                    <TableCell>Tipo de gráfico.</TableCell>
                                    <TableCell>O campo do tipo de gráfico foi alterado para dar 4 opções referentes ao
                                        tipo de gráfico que pode ser criado, eliminando a hípotese do utilizador
                                        introduzir um valor errado.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell numeric component="th" scope="row">
                                        5
                                    </TableCell>
                                    <TableCell>Filtros na criação de um gráfico.</TableCell>
                                    <TableCell>Os filtros foram alterados para só estarem disponíveis para um tipo de gráfico,
                                        denominando-se agora de "categoria".</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell numeric component="th" scope="row">
                                        6
                                    </TableCell>
                                    <TableCell>Criação e abertura dos gráficos.</TableCell>
                                    <TableCell>Foi adicionado controlo à introdução de parâmetros no campo de criação
                                        de gráficos.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell numeric component="th" scope="row">
                                        7
                                    </TableCell>
                                    <TableCell>Visualização do gráfico.</TableCell>
                                    <TableCell>Problema corrigido para mostrar os meses todos.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Notas</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>Entre o site que entregámos na primeira entrega e o site corrigido que é apresentado na fase
                            final pode notar-se uma diferença estética e funcional considerável. Isso deve-se ao facto
                            de termos mudado de ferramenta de construção de websites - de Wix para React - graças ao tempo extra.</p>
                        <p>
                            Deste modo, aqui ficam o url do site actualizado com as novas correcções, o url do servidor web utilizado
                            para gerir a base de dados e url do site com informação geral sobre a evolução do nosso
                            projecto ao longo da cadeira, respectivamente:
                        </p>
                        <p>
                            <Typography className={classes.text}>
                                <b>Savr:</b> (username: admin, password: admin)
                                <a
                                    href="https://danielfct.github.io/savr/"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    <p>https://danielfct.github.io/savr/</p>
                                </a>
                            </Typography>
                        </p>
                        <p>
                            <Typography className={classes.text}>
                                <b>Servidor web:</b>
                                <a
                                    href="https://calm-basin-62001.herokuapp.com/"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    <p>https://calm-basin-62001.herokuapp.com/</p>
                                </a>
                            </Typography>
                        </p>
                        <p>
                            <Typography className={classes.text}>
                                <b>Website do projeto:</b>
                                <a
                                    href="https://danielfct.github.io/ipm/"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    <p>https://danielfct.github.io/ipm/</p>
                                </a>
                            </Typography>
                        </p>
                    </Typography>
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
        marginRight: "5px",
        marginBottom: "0"
    }
};

export default withStyles(style)(Presentation);
