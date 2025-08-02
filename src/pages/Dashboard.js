import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  AppBar, 
  Toolbar, 
  Card, 
  CardContent,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import KPICard from '../components/KPICard';
import RevenueChart from '../components/RevenueChart';
import AIAgentStatus from '../components/AIAgentStatus';
import { 
  kpiData, 
  revenueChartData, 
  aiAgentsStatus, 
  recentInsights 
} from '../data/mockData';

const Dashboard = () => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return '#f44336';
      case 'medium': return '#ff9800';
      case 'low': return '#4caf50';
      default: return '#2196f3';
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ 
            flexGrow: 1, 
            fontWeight: 700,
            fontSize: '1.5rem'
          }}>
            lbazaG
          </Typography>
          <Typography variant="body2" sx={{ 
            backgroundColor: 'rgba(255,255,255,0.2)',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontWeight: 500
          }}>
            AI iGaming Platform
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" component="h1" gutterBottom sx={{
            fontWeight: 700,
            color: '#2c3e50',
            mb: 1
          }}>
            Platform Overview
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 4 }}>
            Real-time analytics and AI insights for your iGaming business
          </Typography>
        </motion.div>

        {/* KPI Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <KPICard
              title="Daily Active Users"
              value={kpiData.dailyActiveUsers.value}
              change={kpiData.dailyActiveUsers.change}
              trend={kpiData.dailyActiveUsers.trend}
              format="number"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <KPICard
              title="Monthly Revenue"
              value={kpiData.monthlyRevenue.value}
              change={kpiData.monthlyRevenue.change}
              trend={kpiData.monthlyRevenue.trend}
              format="currency"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <KPICard
              title="Average RTP"
              value={kpiData.averageRTP.value}
              change={kpiData.averageRTP.change}
              trend={kpiData.averageRTP.trend}
              format="percentage"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <KPICard
              title="Conversion Rate"
              value={kpiData.conversionRate.value}
              change={kpiData.conversionRate.change}
              trend={kpiData.conversionRate.trend}
              format="percentage"
            />
          </Grid>
        </Grid>

        {/* Charts and AI Status */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <RevenueChart data={revenueChartData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AIAgentStatus agents={aiAgentsStatus} />
          </Grid>
        </Grid>

        {/* Recent AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Typography variant="h5" component="h2" gutterBottom sx={{
            fontWeight: 600,
            color: '#2c3e50',
            mb: 3
          }}>
            Recent AI Insights
          </Typography>
          
          <Grid container spacing={3}>
            {recentInsights.map((insight, index) => (
              <Grid item xs={12} md={6} lg={4} key={insight.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card sx={{ 
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    height: '100%'
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                          {insight.agent}
                        </Typography>
                        <Chip 
                          label={insight.severity} 
                          size="small"
                          sx={{
                            backgroundColor: `${getSeverityColor(insight.severity)}20`,
                            color: getSeverityColor(insight.severity),
                            fontWeight: 600
                          }}
                        />
                      </Box>
                      
                      <Typography variant="h6" component="div" sx={{ 
                        fontWeight: 600, 
                        color: '#2c3e50',
                        mb: 1
                      }}>
                        {insight.title}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                        {insight.description}
                      </Typography>
                      
                      <Typography variant="caption" color="textSecondary">
                        {insight.timestamp}
                      </Typography>
                      
                      {insight.actions && insight.actions.length > 0 && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
                            Recommended Actions:
                          </Typography>
                          {insight.actions.map((action, idx) => (
                            <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                              <Box sx={{ 
                                width: 4, 
                                height: 4, 
                                backgroundColor: getSeverityColor(insight.severity), 
                                borderRadius: '50%', 
                                mr: 1 
                              }} />
                              <Typography variant="caption">
                                {action}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Footer */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            lbazaG Platform © 2024 - Local AI Platform for iGaming Industry
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;