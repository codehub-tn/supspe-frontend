import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "services/auth.services";
import { errorHandler } from "utils/errorHandler";

const initialState = {
  user: null,
  tokens: null,
  status: "idle",
  error: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const response = await authServices.register(formData);
      return response;
    } catch (error) {
      return errorHandler(error, thunkAPI);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const response = await authServices.login(formData);
      return response;
    } catch (error) {
      return errorHandler(error, thunkAPI);
    }
  }
);

export const sendEmailVerification = createAsyncThunk(
  "auth/sendEmailVerification",
  async (args, thunkAPI) => {
    try {
      const response = await authServices.sendEmailVerification();
      return response;
    } catch (error) {
      return errorHandler(error, thunkAPI);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verify",
  async (token, thunkAPI) => {
    try {
      const response = await authServices.verifyEmail(token);
      return response;
    } catch (error) {
      return errorHandler(error, thunkAPI);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgot_password",
  async (formData, thunkAPI) => {
    try {
      const response = await authServices.forgotPassword(formData);
      return response;
    } catch (error) {
      return errorHandler(error, thunkAPI);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/reset_password",
  async (data, thunkAPI) => {
    try {
      const response = await authServices.resetPassword(
        data.password,
        data.token
      );
      return response;
    } catch (error) {
      return errorHandler(error, thunkAPI);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "idle";
      state.error = null;
    },
    logout: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.tokens = action.payload.tokens;
        state.status = "success";
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.tokens;
        state.tokens = action.payload.tokens;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload;
      });
    // .addCase(sendEmailVerification.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(sendEmailVerification.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(sendEmailVerification.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // })
    // .addCase(verify.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(verify.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(verify.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    // });
  },
});

export const { reset, logout } = authSlice.actions;

export default authSlice.reducer;
