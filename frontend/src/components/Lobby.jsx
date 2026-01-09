import React, { useEffect, useState } from 'react';
import '../css/styles.css';

const Lobby = ({ players, currentPlayer, onStart, lastResults }) => {
    const [ranking, setRanking] = useState([]);
    const [loadingRanking, setLoadingRanking] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

    // useEffect para cargar el Ranking desde la API
    useEffect(() => {
        fetch(`${API_URL}/api/ranking`)
            .then(response => {
                if (!response.ok) throw new Error('Error al conectar con la API');
                return response.json();
            })
            .then(data => {
                const sorted = data.sort((a, b) => b.points - a.points);
                setRanking(sorted);
                setLoadingRanking(false);
            })
            .catch(error => {
                console.error("No se pudo cargar el ranking:", error);
                setLoadingRanking(false);
            });
    }, []);

    // useEffect para escuchar Enter
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                onStart();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onStart]);

    // Lógica para listar jugadores
    const playerList = Object.values(players || {});

    // Convertimos el objeto de últimos resultados a array y ordenamos
    const lastResultsList = Object.values(lastResults || {}).sort((a, b) => b.points - a.points);

    return (
        <div className="lobby-overlay">
            <div className="lobby-container">
                <header className="lobby-header">
                    <h1>TETRIS MULTIPLAYER</h1>
                    <p>Esperando jugadores...</p>
                </header>

                {/*soporte 3 columnas */}
                <div className="lobby-content" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                    
                    {/* COLUMNA 1: Panel Jugadores */}
                    <div className="lobby-panel">
                        <h3>Jugadores en Sala ({playerList.length})</h3>
                        <ul className="player-list">
                            {playerList.map((p, index) => (
                                <li key={index} className={p.name === currentPlayer ? 'current-user-item' : ''}>
                                    <span className="status-dot"></span>
                                    {p.name} {p.name === currentPlayer && '(Tú)'}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMNA 2: Panel Última Partida */}
                    <div className="lobby-panel" style={{ borderColor: '#fbbf24' }}>
                        <h3 style={{ color: '#fbbf24' }}>Última Partida</h3>
                        {lastResultsList.length === 0 ? (
                            <p style={{ opacity: 0.5, fontStyle: 'italic', padding: '10px' }}>
                                Sin datos recientes
                            </p>
                        ) : (
                            <table className="ranking-table">
                                <thead>
                                    <tr>
                                        <th>Pos</th>
                                        <th>Jgd</th>
                                        <th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lastResultsList.map((res, i) => (
                                        <tr key={i}>
                                            <td>{i === 0 ? '👑' : i + 1}</td>
                                            <td>{res.username}</td>
                                            <td>{res.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* COLUMNA 3: Panel Ranking Histórico */}
                    <div className="lobby-panel">
                        <h3>Ranking Histórico</h3>
                        {loadingRanking ? (
                            <p>Cargando puntuaciones...</p>
                        ) : (
                            <table className="ranking-table">
                                <thead>
                                    <tr>
                                        <th>Pos</th>
                                        <th>Jgd</th>
                                        <th>Pts</th>
                                        <th>Nvl</th> 
                                        {/* Simplificamos columnas por espacio si es necesario */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {ranking.slice(0, 5).map((ranking, i) => (
                                        <tr key={ranking.id || i}>
                                            <td>{i + 1}</td>
                                            <td>{ranking.username}</td>
                                            <td>{ranking.points}</td>
                                            <td>{ranking.level}</td>
                                        </tr>
                                    ))}
                                    {ranking.length === 0 && <tr><td colSpan="4">Sin registros</td></tr>}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

                <footer className="lobby-footer">
                    <div className="pulse-text">PRESIONA [ ENTER ] PARA EMPEZAR</div>
                    <button className="btn start-btn" onClick={onStart}>INICIAR AHORA</button>
                </footer>
            </div>
        </div>
    );
};

export default Lobby;