import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'topic', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', missingFields },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate topic
    const validTopics = ['staffing', 'recruitment', 'gro', 'other'];
    if (!validTopics.includes(formData.topic)) {
      return NextResponse.json(
        { error: 'Invalid topic' },
        { status: 400 }
      );
    }

    // Create contact data
    const contactData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      topic: formData.topic,
      message: formData.message,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    };

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email to Work Force team
    // 3. Send confirmation email to sender
    // 4. Integrate with CRM system
    
    // For now, we'll log the data (in production, save to database)
    console.log('Contact Form Submission:', contactData);

    // TODO: Save to database
    // TODO: Send notification and confirmation emails
    // TODO: Integrate with CRM

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        success: true 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}