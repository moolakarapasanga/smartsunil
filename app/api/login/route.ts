import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const username = body.username;
    const password = body.password;

    let redirectTo = "";

    // Admin credentials
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      redirectTo = "/testing";
    }

    // Researcher credentials
    else if (
      username === process.env.RESEARCHER_USERNAME &&
      password === process.env.RESEARCHER_PASSWORD
    ) {
      redirectTo = "/genelia-jamesbond-23081211";
    }

    // Invalid credentials
    else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password"
        },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      redirectTo
    });

    response.cookies.set("user_role", username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request"
      },
      { status: 400 }
    );
  }
}