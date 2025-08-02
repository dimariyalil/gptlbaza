import React from 'react';
import { Card, CardContent, Typography, Box, Chip, LinearProgress } from '@mui/material';
import { Psychology, SmartToy, TrendingUp, Security } from '@mui/icons-material';
import { motion } from 'framer-motion';

const AIAgentStatus = ({ agents }) => {
  const getAgentIcon = (agentName) => {
    if (agentName.includes('Analytics')) return <TrendingUp />;
    if (agentName.includes('Customer')) return <SmartToy />;
    if (agentName.includes('Marketing')) return <Psychology />;
    if (agentName.includes('Risk')) return <Security />;
    return <SmartToy />;
  };

  const getStatusColor = (status) => {
    return status === 'active' ? '#4caf50' : '#f44336';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card sx={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        borderRadius: 3,
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: '1px solid rgba(255,255,255,0.2)',
        height: '100%'
      }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Psychology sx={{ mr: 1, color: '#667eea' }} />
            <Typography variant="h6" component="div" sx={{ 
              fontWeight: 600, 
              color: '#2c3e50'
            }}>
              AI Agents Status
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Box sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(102, 126, 234, 0.05)',
                  border: '1px solid rgba(102, 126, 234, 0.1)'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {getAgentIcon(agent.name)}
                      <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: 600 }}>
                        {agent.name}
                      </Typography>
                    </Box>
                    <Chip 
                      label={agent.status} 
                      size="small"
                      sx={{
                        backgroundColor: `${getStatusColor(agent.status)}20`,
                        color: getStatusColor(agent.status),
                        fontWeight: 600,
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="caption" color="textSecondary">
                      Last run: {agent.lastRun}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {agent.insights} insights
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                      <Typography variant="caption" color="textSecondary">
                        Accuracy
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        {agent.accuracy}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={agent.accuracy} 
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 3,
                          backgroundColor: agent.accuracy > 90 ? '#4caf50' : agent.accuracy > 80 ? '#ff9800' : '#f44336'
                        }
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AIAgentStatus;