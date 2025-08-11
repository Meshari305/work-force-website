import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['company', 'name', 'email', 'phone', 'roles'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', missingFields },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email to Work Force team
    // 3. Send confirmation email to client
    
    // For now, we'll log the data (in production, save to database)
    console.log('Staffing Request:', formData);

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // TODO: Save to database (MongoDB, PostgreSQL, etc.)

    return NextResponse.json(
      { 
        message: 'Staffing request submitted successfully',
        success: true 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing staffing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}