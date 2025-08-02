import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import { motion } from 'framer-motion';

const KPICard = ({ title, value, change, trend, format = 'number' }) => {
  const formatValue = (val) => {
    if (format === 'currency') {
      return `$${(val / 1000000).toFixed(2)}M`;
    } else if (format === 'percentage') {
      return `${val}%`;
    } else if (format === 'number') {
      return val.toLocaleString();
    }
    return val;
  };

  const getTrendColor = () => {
    return trend === 'up' ? '#4caf50' : '#f44336';
  };

  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        sx={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          height: '100%',
          border: '1px solid rgba(255,255,255,0.2)'
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" component="div" sx={{ 
            fontWeight: 500, 
            color: '#5a5a5a',
            mb: 2
          }}>
            {title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h4" component="div" sx={{ 
              fontWeight: 700, 
              color: '#2c3e50',
              mb: 1
            }}>
              {formatValue(value)}
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              color: getTrendColor(),
              backgroundColor: `${getTrendColor()}20`,
              px: 1.5,
              py: 0.5,
              borderRadius: 2
            }}>
              <TrendIcon sx={{ fontSize: 16, mr: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {Math.abs(change)}%
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default KPICard;