import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const nationality = formData.get('nationality') as string;
    const currentLocation = formData.get('currentLocation') as string;
    const desiredRole = formData.get('desiredRole') as string;
    const noticePeriod = formData.get('noticePeriod') as string;
    const expectedSalary = formData.get('expectedSalary') as string;
    const linkedin = formData.get('linkedin') as string;
    const cvFile = formData.get('cv') as File;
    
    // Validate required fields
    if (!name || !email || !phone || !nationality || !desiredRole || !cvFile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // CV file validation
    if (cvFile.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'CV must be a PDF file' },
        { status: 400 }
      );
    }

    if (cvFile.size > 5 * 1024 * 1024) { // 5MB limit
      return NextResponse.json(
        { error: 'CV file size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Create submission data
    const submissionData = {
      name,
      email,
      phone,
      nationality,
      currentLocation,
      desiredRole,
      noticePeriod,
      expectedSalary,
      linkedin,
      cvFileName: cvFile.name,
      cvFileSize: cvFile.size,
      submittedAt: new Date().toISOString()
    };

    // Here you would typically:
    // 1. Save CV file to cloud storage (AWS S3, Cloudinary, etc.)
    // 2. Save submission data to database
    // 3. Send notification email to HR team
    // 4. Send confirmation email to candidate
    
    // For now, we'll log the data (in production, save to database and file storage)
    console.log('CV Submission:', submissionData);

    // TODO: Upload CV to cloud storage
    // TODO: Save submission to database
    // TODO: Send notification emails

    return NextResponse.json(
      { 
        message: 'CV submitted successfully',
        success: true 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing CV submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}