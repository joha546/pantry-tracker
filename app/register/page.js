'use client';

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { signUp } from '../../lib/auth';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
        const router = useRouter();

          const handleSubmit = async (e) => {
              e.preventDefault();
                  try {
                        await signUp(email, password, name);
                              router.push('/dashboard');
                                  } catch (error) {
                                        console.error('Error signing up:', error);
                                              // Handle error (show message to user, etc.)
                                                  }
                                                    };

                                                      return (
                                                          <Container maxWidth="xs">
                                                                <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                        <Typography component="h1" variant="h5">
                                                                                  Register
                                                                                          </Typography>
                                                                                                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                                                                                            <TextField
                                                                                                                        margin="normal"
                                                                                                                                    required
                                                                                                                                                fullWidth
                                                                                                                                                            id="name"
                                                                                                                                                                        label="Full Name"
                                                                                                                                                                                    name="name"
                                                                                                                                                                                                autoComplete="name"
                                                                                                                                                                                                            autoFocus
                                                                                                                                                                                                                        value={name}
                                                                                                                                                                                                                                    onChange={(e) => setName(e.target.value)}
                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                        <TextField
                                                                                                                                                                                                                                                                    margin="normal"
                                                                                                                                                                                                                                                                                required
                                                                                                                                                                                                                                                                                            fullWidth
                                                                                                                                                                                                                                                                                                        id="email"
                                                                                                                                                                                                                                                                                                                    label="Email Address"
                                                                                                                                                                                                                                                                                                                                name="email"
                                                                                                                                                                                                                                                                                                                                            autoComplete="email"
                                                                                                                                                                                                                                                                                                                                                        value={email}
                                                                                                                                                                                                                                                                                                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                                                                                                                                        <TextField
                                                                                                                                                                                                                                                                                                                                                                                                    margin="normal"
                                                                                                                                                                                                                                                                                                                                                                                                                required
                                                                                                                                                                                                                                                                                                                                                                                                                            fullWidth
                                                                                                                                                                                                                                                                                                                                                                                                                                        name="password"
                                                                                                                                                                                                                                                                                                                                                                                                                                                    label="Password"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                type="password"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            id="password"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        autoComplete="new-password"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    value={password}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <Button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                type="submit"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            fullWidth
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        variant="contained"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    sx={{ mt: 3, mb: 2 }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Register
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </Button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </Box>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </Box>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </Container>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }