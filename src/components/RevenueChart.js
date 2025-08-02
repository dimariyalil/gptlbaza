import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { motion } from 'framer-motion';

const RevenueChart = ({ data, title = "Revenue & Player Growth" }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          p: 2,
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
            {label}
          </Typography>
          {payload.map((entry, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <Box 
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: entry.color,
                  borderRadius: '50%',
                  mr: 1
                }}
              />
              <Typography variant="body2">
                {entry.dataKey === 'revenue' 
                  ? `Revenue: $${(entry.value / 1000000).toFixed(2)}M`
                  : `Players: ${entry.value.toLocaleString()}`
                }
              </Typography>
            </Box>
          ))}
        </Box>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
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
          <Typography variant="h6" component="div" sx={{ 
            fontWeight: 600, 
            color: '#2c3e50',
            mb: 3
          }}>
            {title}
          </Typography>
          
          <Box sx={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  stroke="#8884d8"
                  fontSize={12}
                />
                <YAxis 
                  yAxisId="left"
                  stroke="#8884d8"
                  fontSize={12}
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right"
                  stroke="#82ca9d"
                  fontSize={12}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#8884d8" 
                  strokeWidth={3}
                  dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2 }}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="players" 
                  stroke="#82ca9d" 
                  strokeWidth={3}
                  dot={{ fill: '#82ca9d', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#82ca9d', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ 
                width: 12, 
                height: 12, 
                backgroundColor: '#8884d8', 
                borderRadius: '50%', 
                mr: 1 
              }} />
              <Typography variant="body2" color="textSecondary">Revenue</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ 
                width: 12, 
                height: 12, 
                backgroundColor: '#82ca9d', 
                borderRadius: '50%', 
                mr: 1 
              }} />
              <Typography variant="body2" color="textSecondary">Players</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RevenueChart;